import { Component, OnInit } from '@angular/core';
import { Note } from './../note'
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
	all_notes: Note[] = []
	content_list = ["first", "second", "third"]
	new_note = new Note





  constructor() { }

  ngOnInit() {
  	let ind = 0
  	for (let value of this.content_list){
  		let note = new Note(ind, `${value} note look`, new Date(), new Date())
  		this.all_notes.push(note)
  		ind++
  	}
  } 
  create_note(){
  	console.log("creating user")
  	this.new_note.created_at = new Date()
  	this.new_note.updated_at = new Date()
  	this.new_note.id = this.all_notes.length
  	this.all_notes.push(this.new_note)
  	this.new_note = new Note
  }
}
