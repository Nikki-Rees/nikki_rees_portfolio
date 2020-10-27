import React from "react";


function Nav() {
    // const [store] = useStoreContext();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/"> Nikki Rees </a>

            <a className="navbar-brand" href="/projects/">
                Projects
      </a>
            <a className="navbar-brand" href="/contact/">
                Contact
      </a>
            {/* {store.loading ? <a className="navbar-brand ml-auto">Loading...</a> : <></>} */}
        </nav>
    );
}

export default Nav;