import React, { Component } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import projects from "../projects.json";

class Projects extends Component {
    // Setting this.state.projects to the friends json array
    state = {
        projects
    };

    removeFriend = id => {
        // Filter this.state.friends for friends with an id not equal to the id being removed
        const projects = this.state.projects.filter(project => project.id !== id);
        // Set this.state.projects equal to the new projects array
        this.setState({ projects });
    };

    // Map over this.state.projects and render a projectCard component for each project object
    render() {
        return (
            <Wrapper>
                <Nav />

                <Title>Projects List</Title>
                {this.state.projects.map(project => (
                    <ProjectCard
                        removeproject={this.removeproject}
                        id={project.id}
                        key={project.id}
                        name={project.name}
                        image={project.image}
                        description={project.description}
                        github={project.github}
                        view={project.view}
                    />
                ))}

                <Footer />
            </Wrapper>
        );
    }
}

export default Projects;
