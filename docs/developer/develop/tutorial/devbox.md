# Learn about DevBox

At Terminus, we provide a development tool called **DevBox**. It helps developers create applications for **Terminus**.

- Why is DevBox necessary for developers?
    
  **Terminus** has many cloud-based features that are difficult to simulate in a standalone development environment. Furthermore, the unique sandbox system of **Terminus** requires a real system environment for end-to-end testing. To simplify app simulation for developers and minimize system integration efforts during development, we provide the **DevBox**. **DevBox** is a quick, automatic toolset for creating app sandboxes.

- What features does DevBox have?

  - In **DevBox**, you can build an app and generate a corresponding **Terminus Application Configuration (TAC)**. This TAC's deployment files can be modified, allowing you to port an existing app and deploy it to the **Terminus OS**. During the modification process, you can continually attempt installation and resolve any issues that arise. Once the app passes your tests, you can download your TAC and submit it to the [Terminus Market Repository](https://github.com/beclab/apps).


  - In addition to porting existing apps, you can also create a native **Terminus** application in **DevBox**. **DevBox** provides an online development container where coders can work in a real environment, utilize other system interfaces, database clusters, and more.