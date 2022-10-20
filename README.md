# API Hackfashion

## Contributors
- <a href="https://github.com/danlucss" target="_blank"> Daniel Lucas </a>
- <a href="https://github.com/geovannacas" target="_blank"> Geovanna Cunha </a>
- <a href="https://github.com/vitu2" target="_blank"> Victor Emanuel </a>
- <a href="https://github.com/Flavio-JS" target="_blank"> Flávio Filho </a>
## Technologies
- ![](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
- ![](https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
- ![](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
- ![](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
## Front-end
**Click here:**
<a href="https://github.com/hackadev2022/hack-fashion-react" target="_blank"> Hackfashion </a>

## Available Scripts

In the project directory, you can run: `npm start`

## Available routes

`/productsRouter /customersRouter /addressRouter /pedidosRouter /orderDetailsRouter
`

## `/productsRouter`

### Method: GET `/products`
Returns all products. <br/>
![image](https://user-images.githubusercontent.com/106037619/194573765-879d3d4b-c7cd-497a-8277-dfdf90fd3db7.png)

### Method: GET `/products/:product_id`
Returns the product of id = product_id. <br/>
![image](https://user-images.githubusercontent.com/106037619/194573539-7b5f78fc-7304-4e55-85cd-815377bbca7e.png)

### Method: GET `/productsFilter/:type`
Returns the products that have the type informed. <br/>
![image](https://user-images.githubusercontent.com/106037619/194574190-ed060fe2-6e97-4f63-9ec6-e292bed4cbea.png)

### Method: GET `/productSize/:product_id`

Returns the available sizes of the product corresponding to the id informed. <br/>

![image](https://user-images.githubusercontent.com/106037619/194574468-9ff43b3e-1c90-4ea9-b18c-5a6957d72b16.png)

### Method: GET `/productStar/:product_id`

Returns the total stars and how many stars should be displayed for the given product id.<br/>

![image](https://user-images.githubusercontent.com/106037619/194575503-81806621-2595-4b57-a4ca-1831ccd2df99.png)
 ![image](https://user-images.githubusercontent.com/106037619/194575690-855996e8-8d7d-4bf5-8f78-c2772f02bf55.png)

## `/customersRouter`

### Method: POST `/login`
Returns some user data.<br/>

![image](https://user-images.githubusercontent.com/106037619/194577501-6a0aaf9f-c518-4bfb-b928-20bb58c47b93.png) <br/>

If the email is wrong or not registered it returns `notFound` <br/>

![image](https://user-images.githubusercontent.com/106037619/194578408-15017687-f0a8-4b80-8763-badbee014fe4.png) <br/>

If the password is wrong it returns `wrongPassword` <br/>

![image](https://user-images.githubusercontent.com/106037619/194578626-cd9bee07-5c1f-4ddc-8c27-d3945bc1fe96.png)

### Method: POST `/customer`

Returns some user data.<br/>

## `/addressRouter`
### Method: GET `/address/:customer_id`

Returns the adress for the given customer id.<br/>

### Method: POST `/customer`
Returns some adress data.<br/>

## `/pedidosRouter`
### Method: POST `/pedido`
Returns customer id, address id and total price.<br/>


## `/orderDetailsRouter`
### Method: POST `/orderDetails`
Returns product id, order id, quantity and size.



