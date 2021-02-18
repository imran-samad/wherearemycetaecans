// var counter = 0 // This variable stores the number of species in the array
        var sp_set = new Set()
        var area_set = new Set()
        Set.prototype.intersection = function (otherSet) {
            // creating new set to store intersection 
            var intersectionSet = new Set();

            // Iterate over the values  
            for (var elem of otherSet) {
                // if the other set contains a  
                // similar value as of value[i] 
                // then add it to intersectionSet 
                if (this.has(elem))
                    intersectionSet.add(elem);
            }

            // return values of intersectionSet 
            return intersectionSet;
        }
        Set.prototype.union = function (otherSet) {
            // creating new set to store union 
            var unionSet = new Set();

            // iterate over the values and add  
            // it to unionSet 
            for (var elem of this) {
                unionSet.add(elem);
            }

            // iterate over the values and add it to  
            // the unionSet 
            for (var elem of otherSet)
                unionSet.add(elem);

            // return the values of unionSet 
            return unionSet;
        }
        function find_intersection_areas() {
            if (sp_set.size === 0) {
                area_set = new Set(this.rel.split(','));
                sp_set.add(this.id);
                // return 0
            }
            else if (sp_set.has(this.id)) {
                sp_set.delete(this.id)
                if (sp_set.size === 0) {
                    area_set = new Set()
                    //  $('#' + this.id).attr({
                    //     'onmouseout': "setAreaOut(this, 'main_image_canvas', 0, 0); null",
                    //     // 'onmouseover': "setAreaOver(this,'main_image_canvas','0,0,255','0,0,0','0.33',0,0,0);null"
                    // })
                    // $('#' + this.id).mouseout();
                    // console.log([...sp_set])
                    enable_hover()
                    clear()
                    return 0
                }
                area_set = new Set($('#' + sp_set.values().next().value)[0].rel.split(','))
                sp_set.forEach(x => {
                    area_set = area_set.intersection(new Set($('#' + x)[0].rel.split(',')))
                })
            }
            else {
                sp_set.add(this.id)
                area_set = area_set.intersection(new Set(this.rel.split(',')))
            }
            rel_set = area_set.union(sp_set)
            $('#inter')[0].rel = [...rel_set].join(',')
            highlight("inter")
            disable_hover()
        }
        function disable_hover() {
            $('area').attr('onmouseover', null);
            $('area').attr('onmouseout', null);

         }
         function enable_hover() {
             $('area').attr({
                 'onmouseout': "setAreaOut(this, 'main_image_canvas', 0, 0); null",
                 'onmouseover': "setAreaOver(this,'main_image_canvas','0,0,255','0,0,0','0.33',0,0,0);null"
             })
            }
