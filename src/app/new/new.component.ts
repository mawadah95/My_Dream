import { Component } from '@angular/core';

interface Book {
  title: string;
  author: string;
  imageUrl: string;
  
}

interface  books2 {

  imageUrl2: string;
  
}
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {
  books2:  books2[] = [
    {
      imageUrl2: "https://images-us.bookshop.org/ingram/9781646142668.jpg?height=250&amp;v=v2-de66fa32e4825a6f585c3ae8c2dc4295, https://images-us.bookshop.org/ingram/9781646142668.jpg?height=500&amp;v=v2-de66fa32e4825a6f585c3ae8c2dc4295 1.5x, https://images-us.bookshop.org/ingram/9781646142668.jpg?height=500&amp;v=v2-de66fa32e4825a6f585c3ae8c2dc4295 2x"

    },
    {
      imageUrl2: "https://images-us.bookshop.org/ingram/9780593444511.jpg?height=250&amp;v=v2-6cc017340ea09945c0077d8eea696e91, https://images-us.bookshop.org/ingram/9780593444511.jpg?height=500&amp;v=v2-6cc017340ea09945c0077d8eea696e91 1.5x, https://images-us.bookshop.org/ingram/9780593444511.jpg?height=500&amp;v=v2-6cc017340ea09945c0077d8eea696e91 2x"

    },
    {
      imageUrl2: "https://images-us.bookshop.org/ingram/9781649374172.jpg?height=250&amp;v=v2-19402587c609da55453cf153abf86847, https://images-us.bookshop.org/ingram/9781649374172.jpg?height=500&amp;v=v2-19402587c609da55453cf153abf86847 1.5x, https://images-us.bookshop.org/ingram/9781649374172.jpg?height=500&amp;v=v2-19402587c609da55453cf153abf86847 2x"

    },
    {
      imageUrl2: "https://images-us.bookshop.org/ingram/9781668007877.jpg?height=250&amp;v=v2-c751f52fc106b5ad16ee794fc3ad0a51, https://images-us.bookshop.org/ingram/9781668007877.jpg?height=500&amp;v=v2-c751f52fc106b5ad16ee794fc3ad0a51 1.5x, https://images-us.bookshop.org/ingram/9781668007877.jpg?height=500&amp;v=v2-c751f52fc106b5ad16ee794fc3ad0a51 2x" 
    },
    {
      imageUrl2: "https://images-us.bookshop.org/ingram/9781668007877.jpg?height=250&amp;v=v2-c751f52fc106b5ad16ee794fc3ad0a51, https://images-us.bookshop.org/ingram/9781668007877.jpg?height=500&amp;v=v2-c751f52fc106b5ad16ee794fc3ad0a51 1.5x, https://images-us.bookshop.org/ingram/9781668007877.jpg?height=500&amp;v=v2-c751f52fc106b5ad16ee794fc3ad0a51 2x" 
    },
    {
      imageUrl2: "https://images-us.bookshop.org/ingram/9781668030622.jpg?height=250&amp;v=v2-ad6bd394abd1ef1c67785b8d362bdcd4, https://images-us.bookshop.org/ingram/9781668030622.jpg?height=500&amp;v=v2-ad6bd394abd1ef1c67785b8d362bdcd4 1.5x, https://images-us.bookshop.org/ingram/9781668030622.jpg?height=500&amp;v=v2-ad6bd394abd1ef1c67785b8d362bdcd4 2x"
    },
    {
      imageUrl2: "https://images-us.bookshop.org/ingram/9781638931850.jpg?height=250&amp;v=v2-d522d7e59952cf4afa5c2add00000000, https://images-us.bookshop.org/ingram/9781638931850.jpg?height=500&amp;v=v2-d522d7e59952cf4afa5c2add00000000 1.5x, https://images-us.bookshop.org/ingram/9781638931850.jpg?height=500&amp;v=v2-d522d7e59952cf4afa5c2add00000000 2x"
    },
    {
      imageUrl2: "https://images-us.bookshop.org/ingram/9781683736530.jpg?height=250&amp;v=v2-c8450c59a8b71a17b7b1fa2da80e659a, https://images-us.bookshop.org/ingram/9781683736530.jpg?height=500&amp;v=v2-c8450c59a8b71a17b7b1fa2da80e659a 1.5x, https://images-us.bookshop.org/ingram/9781683736530.jpg?height=500&amp;v=v2-c8450c59a8b71a17b7b1fa2da80e659a 2x"
    },

  ];

  books: Book[] = [
    {
      title: 'Book 1',
      author: 'Author 1',
      imageUrl: "https://images-us.bookshop.org/ingram/9781646221950.jpg?height=250&amp;v=v2, https://images-us.bookshop.org/ingram/9781646221950.jpg?height=500&amp;v=v2 1.5x, https://images-us.bookshop.org/ingram/9781646221950.jpg?height=500&amp;v=v2 2x"
    },
    {
      title: 'Book 2',
      author: 'Author 2',
      imageUrl: "https://images-us.bookshop.org/ingram/9781668030622.jpg?height=250&amp;v=v2-ad6bd394abd1ef1c67785b8d362bdcd4, https://images-us.bookshop.org/ingram/9781668030622.jpg?height=500&amp;v=v2-ad6bd394abd1ef1c67785b8d362bdcd4 1.5x, https://images-us.bookshop.org/ingram/9781668030622.jpg?height=500&amp;v=v2-ad6bd394abd1ef1c67785b8d362bdcd4 2x"
    },
    {
      title: 'Book 3',
      author: 'Author 3',
      imageUrl:"https://images-us.bookshop.org/ingram/9780374610487.jpg?height=250&amp;v=v2-2c3d45583d3a4a79bd1a3208288ebd8d, https://images-us.bookshop.org/ingram/9780374610487.jpg?height=500&amp;v=v2-2c3d45583d3a4a79bd1a3208288ebd8d 1.5x, https://images-us.bookshop.org/ingram/9780374610487.jpg?height=500&amp;v=v2-2c3d45583d3a4a79bd1a3208288ebd8d 2x"
    },
    {
      title: 'Book 4',
      author: 'Author 4',
      imageUrl: "https://images-us.bookshop.org/ingram/9781982188344.jpg?height=250&amp;v=v2-0fe2f1f14b207629767311ace43c2e27, https://images-us.bookshop.org/ingram/9781982188344.jpg?height=500&amp;v=v2-0fe2f1f14b207629767311ace43c2e27 1.5x, https://images-us.bookshop.org/ingram/9781982188344.jpg?height=500&amp;v=v2-0fe2f1f14b207629767311ace43c2e27 2x" 
    },
    // Add more books as needed
    {
      title: 'Book 5',
      author: 'Author 5',
      imageUrl: "https://images-us.bookshop.org/ingram/9781608465644.jpg?height=250&amp;v=v2-f0ea8d23c81912d535e46b1ee9da3eee, https://images-us.bookshop.org/ingram/9781608465644.jpg?height=500&amp;v=v2-f0ea8d23c81912d535e46b1ee9da3eee 1.5x, https://images-us.bookshop.org/ingram/9781608465644.jpg?height=500&amp;v=v2-f0ea8d23c81912d535e46b1ee9da3eee 2x"
    },

    {
      title: 'Book 6',
      author: 'Author 6',
      imageUrl: "https://images-us.bookshop.org/ingram/9781638931850.jpg?height=250&amp;v=v2-d522d7e59952cf4afa5c2add00000000, https://images-us.bookshop.org/ingram/9781638931850.jpg?height=500&amp;v=v2-d522d7e59952cf4afa5c2add00000000 1.5x, https://images-us.bookshop.org/ingram/9781638931850.jpg?height=500&amp;v=v2-d522d7e59952cf4afa5c2add00000000 2x"
    },
    {
      title: 'Book 7',
      author: 'Author 7',
      imageUrl: "https://images-us.bookshop.org/ingram/9780307742483.jpg?height=250&amp;v=v2-b1370c3b348cf5a22d5460bb2f4efb68, https://images-us.bookshop.org/ingram/9780307742483.jpg?height=500&amp;v=v2-b1370c3b348cf5a22d5460bb2f4efb68 1.5x, https://images-us.bookshop.org/ingram/9780307742483.jpg?height=500&amp;v=v2-b1370c3b348cf5a22d5460bb2f4efb68 2x"
    },
    {
      title: 'Book 8',
      author: 'Author 8',
      imageUrl: "https://images-us.bookshop.org/ingram/9781638931850.jpg?height=250&amp;v=v2-d522d7e59952cf4afa5c2add00000000, https://images-us.bookshop.org/ingram/9781638931850.jpg?height=500&amp;v=v2-d522d7e59952cf4afa5c2add00000000 1.5x, https://images-us.bookshop.org/ingram/9781638931850.jpg?height=500&amp;v=v2-d522d7e59952cf4afa5c2add00000000 2x"
    },
  ];

  startIndex: number = 0;
  endIndex: number = 3;

  nextSet() {
    this.startIndex += 4;
    this.endIndex += 4;
  }

  prevSet() {
    this.startIndex -= 4;
    this.endIndex -= 4;
  }


  startIndex2: number = 0;
  endIndex2: number = 3;

  nextSet2() {
    this.startIndex2 += 4;
    this.endIndex2 += 4;
  }

  prevSet2() {
    this.startIndex2 -= 4;
    this.endIndex2 -= 4;
  }

}