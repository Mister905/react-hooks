import React, { useState } from "react";
import ResourceList from './ResourceList';

const App = () => {

  const [resource, set_resource] = useState("posts");

  return (
    <div className="container">
      <div className="row">
        <div className="col m12 center-align">
          <h1>React Hooks</h1>
        </div>
      </div>
      <div className="row">
        <div className="col m6 offset-m3">
          <div className="card">
            <div className="row">
              <div className="col m4 offset-m2">
                <button
                  onClick={() => set_resource("posts")}
                  className="btn btn-wide btn-margin"
                >
                  Posts
                </button>
              </div>
              <div className="col m4">
                <button
                  onClick={() => set_resource("todos")}
                  className="btn btn-wide btn-margin"
                >
                  Todos
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col m12">
                <ResourceList resource={resource} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
