# jpgs-micro-web



English  |  [简体中文](https://github.com/lt502676921/jpgs-micro-web/blob/main/README.zh-CN.md)



With the development of the business and the formalization of the medium-to-long term plan, the team established a key tone that aims to create a Tech-Architecture that can support the rapid and steady growth and continuous evolution of the business. When the Micro-Servitization of the Server-Side is in full swing, the front-end Application of the main backstage management system, which integrates multiple centers and platforms, is also becoming larger and larger, how to "microservitize" a "megalithic application" is where the Front-End team is thinking.





## 🤔 Motivation

A Single-Page-web-Application with long-term developement is bound to become larger and larger. According to the different business, the Server-Side is divided into Merchant-Center, Supplier-Center, Order-center, Commodity-Center, etc. The Front-End should also consider about how to divide and manage a huge front-end application. The Micro-Frontends is already a very mature field, is has been widely used in Enterprise-Level backstage application, derived into a set of front-end ecological closed loop (loaders, routing, publishing system, application plug-in, etc) in the development, even a whole set of Micro-Frontends' solutions are summarized.

Based on the team's expectations and considering about the future, it's natural that the Micro-Frontends  becomes a part of our exploration.





## ✨ Features

During the research, we read the source code of other Micro-Frontends frameworks and implemented a Micro-Frontends framework (the core part) by ourselves to help us better understand the design philosophy of the framework.

- Features of the framework

  - Registration of the Sub-App
  - Parse the Sub-App content and pass it to the Main-App
  - Determine whether to update Sub-App
  - Match the corresponding Sub-App
  - Load the content of the Sub-App
  - Execute all dependencies
  - Render the Sub-App in the container
  - Handle public events
  - Catch exception and report error
  - Manage global state
  - Isolation environment by sandbox
  - Communication mechanism

- Features of the Main-App

  - Define the Sub-App list
  - Load and render Sub-App
  - Routing navigation
  - fetch public data
  - Schedule Sub-Apps

- Features of the Sub-App

  - Business service
  - Listening for traffic (receiving scheduling from the Main-App)





## 🔨 Usage

```bash
$ git clone https://github.com/lt502676921/jpgs-micro-web.git
$ cd jpgs-micro-web
$ npm start
```
