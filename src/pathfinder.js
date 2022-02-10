/*
The pathfinder needs objects with format {"title": "", "stations": [""]}.
*/


class Pathfinder {

    /**
     * 
     * @param {*} start the start station
     * @param {*} end the end station
     * @param {*} plan the plan of the stations
     * @returns a list of stations which are the path
     */
    static getPath(start, end, plan) {
        return null;
    }


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
        return null;
    }


    /**
     * checks if a station has unvisited next stations left
     */
    static isEndStation(station, prev, plan){
        return (this.getNextStations(station, prev, plan) === [])
    }


    /**
     * gets all unvisited stations of the current station
     */
    static getNextStations(currentStation, prev, plan){
        let next;
        if (prev) {
            next = currentStation["stations"].map( station => {
                if (station !== prev){
                    return this.getStation(plan, station);
                }
            })
            return 
        } else {
            next = currentStation.stations.map( station => this.getStation(plan, station));
        }
        return next;
    }


    /**
     * recursive function
     */
    static find(current, end, prev, plan, answer){

        let tempAnswer = answer.map(x => x);
        tempAnswer.push(current.title);

        if (current.title === end){
            return tempAnswer;
        }

        if (this.isEndStation(current, prev, plan)){
            return null;
        }

        const nextStations = this.getNextStations(current, prev, plan);
        console.log(current.title);
        let solution;

        for (const next in nextStations){
            solution = this.find(next, end, current, plan, tempAnswer);
            if (solution !== []){
                return solution;
            }

        }

        return solution;

    }

}

module.exports = Pathfinder;