showMeAll(2) // size

function createMap(n) {
    if(n < 1) {
        return false;
    }
    let map = [];
    let size = (2*n)-1;
    for (let i = 0; i < size; i++) {
        let arr = [];
        for (let b = 0; b < size; b++) {
            let val = Math.floor(Math.random() * (99 - 1 + 1)) + 1;
            arr.push(val);
        }
        map.push(arr);

    }
    return map;
}

function showMeAll(size) {
    let map =  createMap(size);
    console.log(map);
    console.log(getMap(map));
}

function getMap(map = null) {
    if(map == null) {
        return false;
    }

    let center = Math.floor(((map.length -1) / 2));
    // console.log('center: ', center);
    centerMap = map[center][center];
    let string = centerMap;
        for (let m = 1; m <= center; m++) {
            string += " " + getValueDirection(map, center, m, "left-top");
            string += " " + getValueDirection(map, center, m, "top");
            string += " " + getValueDirection(map, center, m, "right");
            string += " " + getValueDirection(map, center, m, "bottom");
            string += " " + getValueDirection(map, center, m, "left-bottom");
        }
   return string;
}

function getValueDirection(map, center, level, direction) {
    let values = "";
    if(direction == 'top') {
        let top = center-level;
        for (let i = top; i <= center+level; i++) {
            values += " " + map[top][i];
        }
        return values;
    } else if(direction == 'left-top') {
        values += map[center][center-level];
        let left = center-level;
        for (let i = 1; i < level; i++) {
            values += " " + map[center-i][center-level];
        }
        return values;
    }   else if(direction == 'right') {
        let top = center-level;
        let right = center+level;
        for (let i = top+1; i <= center+level; i++) {
            values += " " + map[i][right];
        }
        return values;
    } else if(direction == 'bottom') {
        let bottom = center+level;
        for (let i = center+level-1; i > center-level-1; i--) {
            values += " " + map[bottom][i];
        }
        return values;
    } else if(direction == 'left-bottom') {
        let bottom = center+level-1;
        let left = center-level;
        for (let i = bottom; i > center; i--) {
            values += " " + map[i][left];
        }
        return values;
    }
}


