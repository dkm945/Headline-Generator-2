const $yourname = $('#yourname');
const $othername = $('#othername');
const $genButton = $('#genButton');
let $checkbox = $('#checkbox');
let $para = $('p');
//Generate the headline
//Text
    //ON BUTTON CLICK
        
$genButton.click(function() {
    //Prefix
        //Reset text inputs without page reload (define names here instead of at top)
    let names = [];
        //Capture typed input        
            //push to names array
    names.push($yourname.val()); //yourname = names[0]
    names.push($othername.val()); //othername = names[1]
    let headlines = [
        names[0] + " did something. " + names[1] + "'s reaction will CHANGE YOUR LIFE!",
        "Watch " + names[0] + " TOTALLY OBLITERATE " + names[1] + " in this DEVASTATING clip!",
        names[0] + " discovered one weird trick that will magically fix all your insecurities. Competitor " + names[1] + " HATES HIM!"
    ];
            //Headline template chosen via random index
    let output = (headlines[Math.floor(Math.random() * 3)]);
            //if checkbox selected, use chosen prefix in headline
            //select dropdown item
            //text output
    if ($checkbox.is(':checked')) {
        let $prefixMenu = $('#prefix_menu');
        let $prefix = $("option:selected", $prefixMenu).text();
        $para.text($prefix + " " + output);
    } else {
        $para.text(output);
    }
})