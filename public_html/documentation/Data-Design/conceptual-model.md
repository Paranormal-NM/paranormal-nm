#ERD CONCEPTUAL MODEL

##Profile
- PK: profileId
- profileUserName
- profileEmail
- profileActivationToken
- profileHash
- profileTime (timeStamp)

##Story
- PK: storyID
- FK: storyProfileID
- FK: storyCategoryID
- storyTitle
- storyBody
- storyCity
- storyState
- storyTime (timeStamp)

##Category
- PK: categoryId
- categoryName

##Comment
- PK: commentId
- FK: commentProfileId
- FK: commentStoryId
- commentTitle
- commentBody
- commentTime (timeStamp)

##Rating (weak entity)
- FK: storyRatingProfileId
- FK: storyRatingStoryId
- ratingValue


# Relationships
- Foreign Key **storyProfileID** to primary key **profileId**
- Foreign Key **storyCategoryID** to primary key **categoryId**
- Foreign Key **storyRatingId** points to primary key **ratingId**
- Foreign Key **commentProfileId** points to primary key **profileId**
- Foreign Key **commentStoryId** points to primary key **profileId**
- Foreign Key **storyRatingProfileId** points to primary key **profileId**
- Foreign Key **storyRatingStoryId** points to primary key **profileId**