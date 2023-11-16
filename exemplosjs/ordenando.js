bubble_sort = (vet3) => {
    
    for(var i = 0; i < vet3.length; i++){
       
      for(var j = 0; j < ( vet3.length - i -1 ); j++){
         
        if(vet3[j] > vet3[j+1]){
           
          var temp = vet3[j]
          vet3[j] = vet3[j + 1]
          vet3[j+1] = temp
        }
      }
    }
    return vet3;
};


teste = () => {
    return alert('teste');
}

swap = (vet, pos1, pos2) => {
	let valor1 = vet[pos1]
    let valor2 = vet[pos2]
    vet[pos1] = valor2;
    vet[pos2] = valor1;
    return (vet);
}

shuffle = (vetor) => {
var i = vetor.length, j, temp;
while (--i > 0) {
    j = Math.floor(Math.random() * (i+1));
    temp = vetor[j];
    vetor[j] = vetor[i];
    vetor[i] = temp;
}
return (vetor);
}


function selectionSort(inputArr) { 
    let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
         if (min != i) {
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
        }
    }
    return (inputArr);
};


function swap2(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) { 
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}