package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type report struct {
	Ok string `json:"OK"`
	//buyByCountries
	//productionByCountries
	//stockMvtIn
	//stockMvtOut
	//stockRepartitions
	//stockMarket
}

func main() {
	r := gin.Default()
	r.GET("report", getReport)
	r.Run(":3002")
}

func getReport(c *gin.Context) {
	report := report{
		Ok: "todo",
	}
	c.JSON(http.StatusAccepted, report)
}
