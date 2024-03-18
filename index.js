import { createClient } from "https://esm.sh/@supabase/supabase-js"
const supabaseUrl = 'https://cgjwbghidedltdupmqvm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNnandiZ2hpZGVkbHRkdXBtcXZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAyMTE0MzksImV4cCI6MjAyNTc4NzQzOX0.idY91fKjZ11kqOh2200r_OmfbvEr46JK7T1aFDAWW1A'
const supabase = createClient(supabaseUrl, supabaseKey)


let { data: books, error } = await supabase
  .from('books')
  .select('*')

for (let book of books) {
    let bookList = document.getElementById('books');
    bookList.innerHTML += `<li>${book.title}</li>`;
}