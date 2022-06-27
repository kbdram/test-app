class Routes {
  constructor(app) {
    this.app = app;
  }

  /* creating app Routes starts */
  appRoutes() {
    this.app.get("/course/:courseId", (req, res) => {
      console.log(req.params);
      res.send(`Req Course Data for ${req.params.courseId}`);
    });

    this.app.get("/course", (req, res) => {
      res.send(`Get All Courses `);
    });
  }

  routesConfig() {
    this.appRoutes();
  }
}
module.exports = Routes;
