export class MultiPilas {
  //Número máximo de elementos dentro del Stack.
  _stackCapacity: number;
  //Arreglo contiene todos los elementos en los 3 stacks.
  values: Array<any>;
  //Arreglo con tres indices, cada uno representando el numero actual de elementos.
  sizes: Array<number>;
  //Constante que representa el numero total de stacks que nuestro arreglo permitirá.
  numberOfStacks: number;
  constructor(stackSize: number) {
    this._stackCapacity = stackSize;
    this.values = [];
    this.sizes = [0, 0, 0];
    this.numberOfStacks = 3;
  }
  get stackCapacity() {
    return this._stackCapacity;
  }
  /**
   * Este método agrega un valor al inicio de un numero de pila dada.
   */
  push(stackNumber: number, value: any) {
    if (this.isFull(stackNumber)) {
      return console.log(`El numero de pila ${stackNumber} está lleno.`)
    }
    //Agrega uno a la cuenta de la pila seleccionada
    this.sizes[stackNumber]++;
    //Agrega el valor a la lista
    this.values[this.indexOfTop(stackNumber)] = value;
    return console.log(`El objeto ${value} ha sido añadido exitosamente a la pila ${stackNumber}`);
  }
  /**
   * Este método remueve un elemento de un numero de pila dado.
   */
  pop(stackNumber: number) {
    if (this.isEmpty(stackNumber)) {
      return console.log(`La pila ${stackNumber} está vacía.`);
    }
    const topIndex = this.indexOfTop(stackNumber);
    const value = this.values[topIndex];
    this.values[topIndex] = 0; //limpiar todos los elementos
    this.sizes[stackNumber]--; //reducimos el numero de elementos en la pila
    return value;
  }
  /**
   * Este metodo retorna el primer elemento de la respectiva pila.
   */
  peek(stackNumber: number) {
    if (this.isEmpty(stackNumber)) {
      return console.log(`El numero de pila ${stackNumber} está vacío.`);
    }
    const topIndex = this.indexOfTop(stackNumber);
    return this.values[topIndex];
  }
  /**
   * Este método retorna un valor booleano el cual indica que la 
   * respectiva pila tiene datos.
   */
  isEmpty(stackNumber: number): boolean {
    return this.sizes[stackNumber] === 0;
  }
  /**
   * Este método retorna un valor booleano que indica que la pila está llena o no.
   */
  isFull(stackNumber: number): boolean {
    return this.sizes[stackNumber] === this._stackCapacity;
  }
  /**
   * Este método nos servirá para retornar el índice, en el valor de los arreglos del  * elemento inicial de cada pila.
   */
  indexOfTop(stackNumber: number) {
    const offset = stackNumber * this._stackCapacity;//Encuentra el punto inicial del arreglo
    const size = this.sizes[stackNumber];//Cuantos elementos hay en el stack actualmente
    return offset + size - 1;
  }
}