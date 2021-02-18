// will clear all highlights
        function clear() {
            $('area').mouseout();
        }

        // This will clear the input on pressing enter
        function clear_inp() {

            $('#searchbar').val('');
            // clear();
            $('#searchbar').focus();
        }

        // <!-- This script is for highlighting the particular animal from the name  -->
        function highlight(id_str) {
            // First un-highlight everything
            // clear();
            //highlight the particular thing
            // console.log('HIGHLIGHT FUNCTION CALLED for: - ',id_str)
            // $('#' + id_str).attr('onmouseover',undefined);
            $('#' + id_str).attr({
                'onmouseout':"setAreaOut(this, 'main_image_canvas', 0, 0); null",
                'onmouseover':"setAreaOver(this,'main_image_canvas','0,0,255','0,0,0','0.33',0,0,0);null"
            })
            $('#' + id_str).mouseout();
            $('#' + id_str).mouseover();
        }

        // here is where the input for the search is processed
        function search_animal() {
            inp = document.getElementById("searchbar")
            inp_str = inp.value.toLowerCase();
            // console.log('INPUT ENTERED (inp)=', inp)
            if (inp_str) {
                for (species in species_list) {
                    if (species_list[species].startsWith(inp_str)) {
                        highlight(species_to_id[species_list[species]]);
                        autocomplete(inp, species_list)
                        console.log(species_to_id[species_list[species]])
                        return 0;
                    }
                }
            }
        }