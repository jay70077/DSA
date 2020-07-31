/* we can handle tree travers in js by recusrive function
*/
const tree = {
    title:'NodeA',
    child:[
        {
          title:'NodeB',
          child:[
            {
                title:'NodeE',
                child:[
                  {
                      title:'nodeG'
                  }
                ]
              },
              {
                  title:'nodeF',
                
              },
          ]  
        },
        {
            title:'nodeC',
             child:[

             ]
        },
        {
            title:'nodeD',
            
        }
    ]
}

function treeTravers(node){
    if(node.child){
        node.child.map((child)=>{
           console.log('ChildNode' , child)
           if(child.child){
            child.child.map((childofchild)=>{
                console.log('childofchild' , childofchild)
                treeTravers(childofchild)
             })
           }
           treeTravers(child)
        })
    }
}
treeTravers(tree)
