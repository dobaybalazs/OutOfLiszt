import DefaultList from "./defaultlist";

class CreatedList extends DefaultList {
  constructor(id, name, products, quantity, pricesum, date, users, priority) {
    super(id, name, products, quantity, pricesum);
    this.date = date;
    this.users = users;
    this.priority = priority;
  }
}

export default CreatedList;
