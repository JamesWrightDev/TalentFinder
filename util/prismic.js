import Prismic from '@prismicio/client'

const apiEndpoint = 'https://agency1.cdn.prismic.io/api/v2'
const client = Prismic.client(apiEndpoint)

export const getAllCandidates = () => {
    return client.query(
        Prismic.Predicates.at('document.type', 'candidate'),
        { orderings : '[my.blog_post.date desc]' }
    )
}

export const getCandidateByDepartment = (department) => {
    return client.query(
        Prismic.Predicates.at('my.candidate.department', department),
        { orderings : '[my.blog_post.date desc]' }
    )
}

export default client;