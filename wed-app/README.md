
## models
User
- id: int
- username: string
- email: string

Photo
- id: int
- url: string
- userId: int
- albumId: int
- description: string

Album
- id: int
- userId: int
- title: string
- description: string
- photos: Photo[]

## routes
- GET /users
- POST /users
- GET /users/:id
- 