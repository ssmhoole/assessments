db = db.getSiblingDB('toDoSample')
db.createCollection('users')
usersCollection = db.getCollection("users")
usersCollection.remove({})
usersCollection.insert(
{
	  name: "Spanish 101",
	  description: "Section 1 Spanish Course",
	  courseId: 1,
	  due: "04-27-2015",
	  state: "A",
	  owner: "samM"
}
)



db = db.getSiblingDB('toDoSample')
db.createCollection('courses')
coursesCollection = db.getCollection("courses")
coursesCollection.remove({})
coursesCollection.insert(
{
	  name: "Spanish 101",
	  description: "Section 1 Spanish Course",
	  courseId: 1,
	  due: "04-27-2015",
	  state: "A",
	  owner: "samM"
}
)
coursesCollection.insert(
{
	  name: "Tagalog 101",
	  description: "Section 1 Tagalog Course",
	  courseId: 2,
	  due: "05-27-2015",
	  state: "A",
	  owner: "samM"
}
)
coursesCollection.insert(
{
	  name: "Vietnamese 101",
	  description: "Section 1 Vietnamese Course",
	  courseId: 3,
	  due: "08-27-2015",
	  state: "A",
	  owner: "samM"
}
)
db.createCollection('assessments')
assessmentsCollection = db.getCollection("assessments")
assessmentsCollection.remove({})
assessmentsCollection.insert(
{
	courseId : 1,
	assessments : [
	 {
	  description: "Translate 1",
	  assessmentId: 1,
	  shared: "N",
	  status: "I"
	 },
	 {
	  description: "Translate 2",
	  assessmentId: 2,
	  shared: "N",
	  status: "I"
	 },
	 {
	  description: "Translate 3",
	  assessmentId: 3,
	  shared: "N",
	  status: "I"
	 },
	 {
	  description: "Translate 4",
	  assessmentId: 4,
	  shared: "N",
	  status: "I"
	 },
	 {
	  description: "Translate 4",
	  assessmentId: 5,
	  shared: "wife",
	  status: "I"
	 }
	]
}
)
assessmentsCollection.insert(
{
	courseId : 2,
	assessments : [
	 {
	  description: "Translate 11",
	  assessmentId: 1,
	  shared: "N",
	  status: "I"
	 },
	 {
	  description: "Translate 22",
	  assessmentId: 2,
	  shared: "N",
	  status: "I"
	 },
	 {
	  description: "Translate 33",
	  assessmentId: 3,
	  shared: "N",
	  status: "I"
	 },
	 {
	  description: "Translate 44",
	  assessmentId: 4,
	  shared: "N",
	  status: "I"
	 },
	 {
	  description: "Translate 55",
	  assessmentId: 5,
	  shared: "N",
	  status: "I"
	 }
	]	
}
)
assessmentsCollection.insert(
{
	courseId : 3,
	assessments : [
	 {
	  description: "Translate 111",
	  assessmentId: 1,
	  shared: "N",
	  status: "I"
	 },
	 {
	  description: "Translate 222",
	  assessmentId: 2,
	  shared: "N",
	  status: "I"
	 },
	 {
	  description: "Translate 333",
	  assessmentId: 3,
	  shared: "N",
	  status: "I"
	 },
	 {
	  description: "Translate 444",
	  assessmentId: 4,
	  shared: "N",
	  status: "I"
	 },
	 {
	  description: "Translate 555",
	  assessmentId: 5,
	  shared: "N",
	  status: "I"
	 }
	]	
}
)