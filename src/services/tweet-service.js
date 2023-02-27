import {TweetRepository, HashtagRepository} from '../repository/index.js'

class TweetService{
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data){
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag) => tag.substring(1)).map((tag) => tag.toLowerCase()); // this regex extracts hashtags
        const tweet = await this.tweetRepository.create(data);
        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);

        // [excited,coding,js,career] -> [{title: 'excited'}, {title: 'career}]
        let titleOfPresentTags = alreadyPresentTags.map((tag) => tag.title)   // gives this -> ['excited','career']

        // now find tags which are not present in alreadyPresentTags
        let newTags = tags.filter((tag) => !titleOfPresentTags.includes(tag));  // ['coding','js']

        // Process newTags array
        // [{title:'coding', tweets: []}, {title:'js', tweets: []}]
        newTags = newTags.map((tag) => {
            return {title: tag,tweets: [tweet.id]}
        });

        // now create newTags using bulkcreate
        const response = await this.hashtagRepository.bulkCreate(newTags);

    
        // also add tweet id to already present tags
        alreadyPresentTags.forEach(async function(tag){
            tag.tweets.push(tweet.id);
            tag.save();
            // tweet.hashtags.push(tag.id);
            // tweet.save();
        });
    
        return tweet;
    }

    async get(tweetId){
        const tweet = await this.tweetRepository.getWithComments(tweetId);
        return tweet;
    }
}

export default TweetService;

/**
 * This is my #first #tweet. I am really #excited
 */