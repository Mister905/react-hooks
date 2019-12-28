import React, { useState, useEffect } from "react";
import axios from "axios";

const ResourceList = props => {
  const { resource } = props;

  const [resources, set_resources] = useState([]);

  const get_resource = async resource => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );

    set_resources(response.data);
  };

  useEffect(() => {
    get_resource(resource);
  }, [resource]);

  return (
    <div>
      <div className="row">
        <div className="col m12 center-align">
          <ul className="collection">
            {resources.map(record => {
              return (
                <li key={record.id} className="collection-item">
                  {record.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResourceList;
