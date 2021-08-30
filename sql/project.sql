DROP TABLE IF EXISTS rating;
DROP TABLE IF EXISTS category;
DROP TABLE IF EXISTS comment;
DROP TABLE IF EXISTS story;
DROP TABLE IF EXISTS profile;
CREATE TABLE profile (
                         profileId BINARY(16) NOT NULL,
                         profileActivationToken CHAR(32) NOT NULL,
                         profileAddressCity VARCHAR(45) NOT NULL,
                         profileAddressState CHAR(2) NOT NULL,
                         profileEmail VARCHAR(45) NOT NULL UNIQUE,
                         profileHash CHAR (97) NOT NULL,
                         profileCreateTime TIMESTAMP,
                         profileUsername VARCHAR(32) NOT NULL UNIQUE,
                         primary key(profileId),
                         index(profileEmail)
);
CREATE TABLE story (
                       storyId BINARY(16) NOT NULL,
                       storyBody VARCHAR(10000) NOT NULL,
                       storyCategoryId BINARY(16) NOT NULL,
                       storyTitle VARCHAR(45) NOT NULL,
                       storyLocationCity VARCHAR(45) NOT NULL,
                       storyLocationState CHAR(2) NOT NULL,
                       storyProfileId BINARY(16) NOT NULL,
                       storyRating TINYINT,
                       primary key(storyId),
                       foreign key(storyProfileId) REFERENCES profile(profileId),
                       index(storyBody,storyTitle)
);
CREATE TABLE comment (
                         commentId BINARY (16) NOT NULL,
                         commentBody VARCHAR(3000) NOT NULL,
                         commentTitle VARCHAR(45) NOT NULL,
                         commentProfileId BINARY(16) NOT NULL,
                         commentStoryId BINARY(16) NOT NULL,
                         primary key(commentId),
                         foreign key(commentProfileId) REFERENCES profile(profileId),
                         foreign key(commentStoryId) REFERENCES story(storyId),
                         index(commentBody, commentTitle)
);
CREATE TABLE category (
                          categoryId BINARY(16) NOT NULL,
                          categoryName VARCHAR(32) NOT NULL,
                          primary key(categoryId)
);
CREATE TABLE rating (
                        storyRating TINYINT,
                        ratingProfileId BINARY(16),
                        ratingStoryId BINARY(16),
                        foreign key(ratingProfileId) REFERENCES profile(profileId),
                        foreign key(ratingStoryId) REFERENCES story(storyId)
);