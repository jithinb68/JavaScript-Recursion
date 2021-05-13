const sampleInput1 = [
   {
       node: {
           orgName: "Apple Inc.",
           tickerSymbol: "AAPL",
           priceSet: {
               edges: [
                   {
                       node: {
                           date: "Mar 26, 2021",
                           open: "120.35",
                           close: "121.21",
                       },
                   },
               ],
           },
       },
   },
   {
       node: {
           orgName: "Facebook, Inc",
           tickerSymbol: "FB",
           priceSet: {
               edges: [
                   {
                       node: {
                           date: "Mar 26, 2021",
                           open: "278.30",
                           close: "283.02",
                       },
                   },
               ],
           },
       },
   },
];

const sampleInput2 = [
   {
       title: "Organization",
       key: "orgName",
   },
   {
       title: "Ticker Symbol",
       key: "tickerSymbol",
   },
   {
       title: "Price Set",
       key: "priceSet",
       children: [
           {
               title: "Price",
               key: "price",
               children: [
                   {
                       title: "Date",
                       key: "priceSet",
                       dataKey: "date",
                   },
                   {
                       title: "Open Price",
                       key: "priceSet",
                       dataKey: "open",
                   },
                   {
                       title: "Close Price",
                       key: "priceSet",
                       dataKey: "close",
                   },
               ],
           },
       ],
   },
]

const fillValues = (referanceArray, item, output) => {
   referanceArray.forEach((obj, index) => {
       if (obj?.node?.[item.key]) {
           if (typeof obj?.node?.[item.key] === 'string')
               output[`data${index}`] = obj?.node?.[item.key]
           else{ if (typeof obj?.node?.[item.key]?.edges?.length > 0) {
               fillValues(output[`data${index}`]?.edges, item, output)
           }
       }
       }
   })
}

const myFun = (arr1, arr2) => {
   return arr2.map(item => {
       let output = {title: item.title}
       if(item.children){
           output.children = myFun(arr1, item.children)
       }
       else{
           fillValues(arr1, item, output)
       }
       return output;
   })
}

console.log(myFun(sampleInput1, sampleInput2))