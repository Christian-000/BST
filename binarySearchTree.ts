class BST {
  private value: number;
  private left: BST | null;
  private right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  public add(data: number): void {
    if (data > this.value) {
      if (!this.right) this.right = new BST(data);
      else this.right.add(data);
    } else {
      if (!this.left) this.left = new BST(data);
      else this.left.add(data);
    }
  }

  public length(): number {
    let cont = 1;
    if (this.left) cont += this.left.length();
    if (this.right) cont += this.right.length();

    return cont;
  }
}

const n = new BST(10);
n.add(11);
n.add(90);
n.add(91);
n.add(9);
n.add(8);
n.add(0);
n.add(9.5);
console.log(n.length());
console.log(n);
