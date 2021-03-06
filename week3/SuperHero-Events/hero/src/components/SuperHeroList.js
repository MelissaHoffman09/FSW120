import React from "react"
import { default as data } from "./data.json"
import SuperHero from "./SuperHero.js"

function SuperHeroList() {
    const heroComponents = data.map(data => <SuperHero
        name={data.name}
        catchPhrase={data.catchPhrase}
        imageName={data.imageName}
        show={data.show}
    />)
    return (
        <div>
            {heroComponents}
        </div>
    )
}

 export default SuperHeroList