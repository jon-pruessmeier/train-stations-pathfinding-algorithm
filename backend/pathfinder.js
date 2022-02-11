/*
The pathfinder needs objects with format {"title": "", "stations": [""]}.
*/


class Pathfinder {


    /**
     * 
     * @param {*} plan 
     * @param {*} stationName 
     * @returns the object to the respective station-title
     */
    static getStation(stationName, plan){
        for (let i = 0; i < plan.length; i++){
            if (plan[i].title === stationName){
                return plan[i];
            }
        }
        return {"title": "", "stations": [""]}
    }


    /**
     * checks if a station has unvisited next stations left
     
    static isEndStation(station, prev, plan){
        const isEndStation = (this.getNextStations(station, prev, plan) === []);
        return isEndStation;
    }
    */


    /**
     * gets all unvisited stations of the current station
     */
    static getNextStations(currentStation, prev, plan){
        let next = [];
        if (prev) {
            const filteredNext = currentStation.stations.filter( station => station !== prev.title);

            next = filteredNext.map(station => this.getStation(station, plan));
        } else {
            next = currentStation.stations.map( station => this.getStation(station, plan));
        }
        return next;
    }


    /**
     * recursive function
     */
    static find(start, end, plan){

        let current = this.getStation(start, plan);
        const solution = [];
        const visited = [];
        let finished = false;

        while (!finished){

            const title = current.title;
            console.log(`Jetzige Station: ${title}`);

            if (!visited.includes(title)){
                visited.push(title);
            }
            
            if (title === end || visited.length === plan.length || title === ""){
                solution.push(title);
                finished = true;
            } else {

               const neighbours = current.stations.filter(station => !visited.includes(station));
               console.log(`Nachbarn verfügbar: ${neighbours.length}`);

               if (current.title == "Prießallee"){
                console.log(neighbours);
            }


                if (neighbours.length === 0){
                    current = this.getStation(solution.pop(), plan);
                    console.log("IM IF STATEMENT");
                } else {
                    solution.push(title);
                    current = this.getStation(neighbours[0], plan);
                    
                }  
            }

            console.log(`Nächste Station: ${current.title}`);
            console.log('--------------------------------------')
        }
        

        return solution;

    }
    

}

module.exports = Pathfinder;