# A day at a coffee shop!
This project is a Restful architecture based rails application to handle the operations of a coffee shop.

### Features (APIs)
- Manage items for the coffee shop.
- Manage customers (recurring and new).
- Manage Orders for customers.
- Manage Taxations on each item.
- Apply Discounts on pair of items when bought together. (Assumptions in seed)
- Notifications to customers for order completeion using email.

### Assumptions
- With each order, information of customer and order_items will be sent in request.
- Discounts will be applied only if items are bought together in one order.
- Tax addition will happen per item basis.

## Project structure

| Name                          | Description                                                                      |
| ------------------------------|--------------------------------------------------------------------------------- |
| src/api                       | dir contains side effect calls to backend                                        |
| src/assets/                   | Dir contains static resources used in project                                    |
| src/screens                   | Dir contains main pages and their styling                                        |
| src/components                | Dir contains reusable components                                                 |
| src/utils                     | Dir contains basic utilities and their exports                                   |



### DEPENDENCIES
- Node ~16

## PROJECT SETUP

> First backend should be running at port 3001

### Install required dependencies
This project is built using Node.

Once you have Node installed, you will need the to install other dependencies listed in packages.json, run the following command from the root directory of the application

```
yarn install
```

After the above command is completed, run the app

```
yarn start
```

Amazing! Now app will run on your default browser.

## If I had extra time

> Improvements in UI/UX

> Add test coverage


