export class Note {
  id;
  content;
  created_at;
  updated_at;
  constructor(id = 0, content = '', created_at = {}, updated_at = {}){
    this.id = id
    this.content = content
    this.created_at = created_at
    this.updated_at = updated_at
  }
}
