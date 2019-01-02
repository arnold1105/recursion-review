// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  // your code here
  //document.body, element.childNodes, and element.classList
  // 
  //input: className
  //output: a collection of all elements in the document with the specified class name
  var nodes = [];
  //if no specific node is passed in, then we look at the whole document for the instance of className
  node = node || document.body;
  
  var splitNode = node.className.split(' '); // defines an array of all the node's classNames
  //if the specific className is found in the collection
  if (splitNode.indexOf(className) > -1) {
    nodes.push(node);
  }
  
  for (var i = 0; i < node.children.length; i++) {
    //recursively go through children of the nodes (if they have children), to find all children nodes with className
    var childrenResults = getElementsByClassName(className, node.children[i])
    nodes = nodes.concat(childrenResults)
  }
  return nodes;
};
