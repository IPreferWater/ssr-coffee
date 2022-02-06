package main

import (
	"fmt"
	"net/http"
	"sync"

	"github.com/gin-gonic/gin"
)
//TODO https://go.dev/blog/race-detector
// it's safe for different fields
type report struct {
	Ok string                    `json:"OK"`
	P  productionByCountriesData `json:"p"`
	S  salesByCountriesData      `json:"s"`
	//stockMvtIn
	//stockMvtOut
	//stockRepartitions
	//stockMarket
}

type productionByCountriesData struct {
	Data string `json:"data"`
}

type salesByCountriesData struct {
	Data string `json:"data"`
}

func main() {

	


	r := gin.Default()
	r.GET("report", getReport)
	r.Run(":3002")
}

func getReport(c *gin.Context) {

	var report report
	var wg sync.WaitGroup
	wg.Add(2)
	go productionByCountries(&wg, &report)
	go salesByCountries(&wg, &report)

	wg.Wait()

	fmt.Println(report)

	c.JSON(http.StatusAccepted, report)

}

func productionByCountries(wg *sync.WaitGroup, r *report) {
	defer wg.Done()
	fmt.Println("getting p ...")
	//time.Sleep(time.Second * 3)
	fmt.Println("done p")
	r.P = productionByCountriesData{
		Data: "production",
	}
/*	r.S = salesByCountriesData{
		Data: "sales",
	}*/
}

func salesByCountries(wg *sync.WaitGroup, r *report) {
	defer wg.Done()
	fmt.Println("getting s ...")
	//time.Sleep(time.Second * 2)
	fmt.Println("done s")

	r.S = salesByCountriesData{
		Data: "sales",
	}
}

/*
func productionByCountries(done chan interface{}) {
	fmt.Println("getting p ...")
	time.Sleep(time.Second * 4)
	fmt.Println("done p")
	done <- productionByCountriesData{
		Data: "random",
	}
}

func salesByCountries(done chan interface{}) {
	fmt.Println("getting s ...")
	time.Sleep(time.Second * 5)
	fmt.Println("done s")
	done <- salesByCountriesData{
		Data: "random",
	}
}*/
