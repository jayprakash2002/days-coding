use("CrudDb")
db.createCollection("xyz")
db.xyz.insertOne({
    name:"Harrys web dev free course",
    price:0,
    assignments:12,
    project:45
})

db.xyz.insertMany(
    [
        {
            "name": "Harry's Web Dev Free Course",
            "price": 0,
            "assignments": 12,
            "project": 45
        },
        {
            "name": "Harry's Complete Web Dev Course",
            "price": 0,
            "assignments": 10,
            "project": 40
        },
        {
            "name": "Harry's Beginner Web Dev Program",
            "price": 0,
            "assignments": 14,
            "project": 50
        },
        {
            "name": "Harry's Advanced Web Dev Techniques",
            "price": 0,
            "assignments": 18,
            "project": 60
        },
        {
            "name": "Harry's Web Dev Essentials",
            "price": 0,
            "assignments": 8,
            "project": 30
        },
        {
            "name": "Harry's Web Dev Masterclass",
            "price": 0,
            "assignments": 15,
            "project": 55
        },
        {
            "name": "Harry's Full-Stack Web Dev Course",
            "price": 0,
            "assignments": 20,
            "project": 70
        },
        {
            "name": "Harry's Front-End Web Dev Course",
            "price": 0,
            "assignments": 12,
            "project": 45
        },
        {
            "name": "Harry's Responsive Web Design Course",
            "price": 0,
            "assignments": 9,
            "project": 35
        },
        {
            "name": "Harry's JavaScript-Focused Web Dev Course",
            "price": 0,
            "assignments": 12,
            "project": 45
        }
    ]
    
)

let a=db.xyz.find({price:0})

console.log(a)


db.xyz.updateMany({price:0},
{$set:{price:1000}})