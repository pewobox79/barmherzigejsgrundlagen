//function für CREATE HOMEPAGE

function createPage(data) {

    if (data === undefined) {
        console.log("no data detected")
        return
    }

    switch (data?.type) {
        case 'homepage':
            console.log("homepage case")
            createHeadline(data.headline)
            createSubLine(data.subLine)
            renderElement(data.items)
            break;
        default: console.log("no page type")
    }



}

createPage(pageData)





//create function für h1 => headline

//create function für h3 =>subline

//re-use createContactCard für item[0].entries

//create Elements für cars


