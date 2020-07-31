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
           treeTravers(child)
        })
    }
}
treeTravers(tree)
