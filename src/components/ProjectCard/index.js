import React from "react";
import "./style.css";

function ProjectCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Description:</strong> {props.description}
                    </li>
                    <li>
                        <strong>Github</strong> {props.github}
                    </li>
                    <li>
                        <strong>View</strong> {props.view}
                    </li>
                </ul>
            </div>
            <span onClick={() => props.removeProject(props.id)} className="remove">
                𝘅
      </span>
        </div>
    );
}

export default ProjectCard;
