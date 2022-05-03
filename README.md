# nodeSearchApi

A REST API to search for products

predefined route: localhost:3000/api/v1/products

- Query optional parameters:

  - **name**:String -> filter by name (doesn't have to be exact)
  - **featured**:Boolean -> filter using the featured flag of the product
  - **company**:String -> filter by Company code ("ikea", "liddy", "caressa", "marcos")
  - **numericFilters**:Array -> filter usign operators (<,=,>,<=,=>) against price and/or raiting
  - **sort**:Array -> list of fields for sorting (example: "-price" = "sort descending by price")
  - **fields**:Array -> array of fields that you want to obtain from each product
  - **page**: the page number (for pagination). Defualt: 1
  - **limit**: the page size (for pagination). Default: 10

- Examples
  - Get all the products "name" & "price" fields with "chair" on the name that are not featured, form the comany "marcos" with raiting more than 3 sorting by price ascending
  ```
  //localhost:3000/api/v1/products?name=chair&featured=false&company=marcos&raiting>3&sort=-price
  ```
  - Get the second page for all the products from ikea with a page size of 5
  ```
  //localhost:3000/api/v1/products?company=marcos&page=2&limit=5
  ```
