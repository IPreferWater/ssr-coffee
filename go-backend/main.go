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
}

func salesByCountries(wg *sync.WaitGroup, r *report) {
	defer wg.Done()
	r.S = salesByCountriesData{
		Data: "sales",
	}
}
