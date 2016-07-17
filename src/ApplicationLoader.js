'use strict';

function ApplicationLoader(data, doNext) {
    let Application     = data.application,
        Configuration   = data.configuration,
        Repository      = data.repository,
        Database        = Repository.get('database.waterline');


    function loadRouter(name, router) {
        Application.use(
            `/${name}`,
            Repository.set(`app.router.${name}`, router)
        );
    }

    function loadEntity(name, entity) {
        Database.instance.loadCollection(entity.model.schema);
        Repository.set(`app.entity.${name}`, entity);
    }

    let ComponentsDirectory = data.configuration.application.dir;
    let Components = require(ComponentsDirectory);

    for(let name in Components) {
        let Component = Components[name](Application, Repository);

        if (Component.router) {
            loadRouter(name, Component.router);
        }

        if (Component.entity) {
            loadEntity(name, Component.entity);
        }
    }

    Database.instance.initialize(Database.configuration, (err, db) => {
        if (err) {
            return doNext(err);
        }

        let Collections = db.collections;

        for(var name in Collections) {
            let Entity = Repository.get(`app.entity.${name}`);

            if (Entity) {
                Entity.model.set(Collections[name]);
            }
        }

        return doNext(err);
    });
}

module.exports = ApplicationLoader;