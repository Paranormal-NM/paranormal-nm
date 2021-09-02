
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
                         profileCreateTime TIMESTAMP,
                         profileEmail VARCHAR(45) NOT NULL UNIQUE,
                         profileHash CHAR (97) NOT NULL,
                         profileUsername VARCHAR(32) NOT NULL UNIQUE,
                         primary key(profileId)
);
CREATE TABLE story (
                       storyId BINARY(16) NOT NULL,
                       storyProfileId BINARY(16) NOT NULL,
                       storyBody BLOB NOT NULL,
                       storyCategoryId BINARY(16) NOT NULL,
                       storyLocationCity VARCHAR(45) NOT NULL,
                       storyLocationState CHAR(2) NOT NULL,
                       storyRating TINYINT,
                       storyTitle VARCHAR(45) NOT NULL,
                       primary key(storyId),
                       foreign key(storyProfileId) REFERENCES profile(profileId),
                       index(storyProfileId)
);
CREATE TABLE comment (
                         commentId BINARY (16) NOT NULL,
                         commentProfileId BINARY(16) NOT NULL,
                         commentStoryId BINARY(16) NOT NULL,
                         commentBody VARCHAR(3000) NOT NULL,
                         commentTitle VARCHAR(45) NOT NULL,
                         primary key(commentId),
                         foreign key(commentProfileId) REFERENCES profile(profileId),
                         foreign key(commentStoryId) REFERENCES story(storyId),
                         index(commentProfileId, commentStoryId)
);
CREATE TABLE category (
                          categoryId BINARY(16) NOT NULL,
                          categoryName VARCHAR(32) NOT NULL,
                          primary key(categoryId)
);
CREATE TABLE rating (
                        rating TINYINT,
                        ratingProfileId BINARY(16),
                        ratingStoryId BINARY(16),
                        foreign key(ratingProfileId) REFERENCES profile(profileId),
                        foreign key(ratingStoryId) REFERENCES story(storyId),
                        index(ratingProfileId, ratingStoryId),
                        primary key(ratingProfileId, ratingStoryId)
);