
function setScrollTop(top=0){
    const dScrollTop = document.documentElement.scrollTop,
        bScrollTop = document.body.scrollTop
    if(!(dScrollTop || bScrollTop)){
        document.body.scrollTop = top
        if(!document.body.scrollTop){
            document.documentElement.scrollTop = top
        }
    }  else {
        if(document.body.scrollTop){
            document.body.scrollTop = top
        } else {
            document.documentElement.scrollTop = top
        }
    }
}

export default {
    inserted: function(el, binding) {
        el.onclick = function() {
            let total;
            if (binding.value == 0) {
                total = 0;
            } else {
                total = document.getElementById(`anchor-${binding.value}`).offsetTop - 80;
            }
            let distance = document.documentElement.scrollTop || document.body.scrollTop;
            let step = total / 50;
            if (total > distance) {
                (function smoothDown() {
                    if (distance < total) {
                        distance += step;
                        setScrollTop(distance)
                        // document.documentElement.scrollTop = distance;
                        setTimeout(smoothDown, 5);
                    } else {
                        setScrollTop(total)
                        // document.documentElement.scrollTop = total;
                    }
                })();
            } else {
                let newTotal = distance - total;
                step = newTotal / 50;
                (function smoothUp() {
                    if (distance > total) {
                        distance -= step;
                        setScrollTop(distance)
                        // document.documentElement.scrollTop = distance;
                        setTimeout(smoothUp, 5);
                    } else {
                        setScrollTop(total)
                        // document.documentElement.scrollTop = total;
                    }
                })();
            }
        }
    }
}