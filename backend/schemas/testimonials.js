export default {
    name: 'testimonials',
    type: 'document',
    title: 'Testimonials',
    fields: [
        {
            name: 'company',
            type: 'string',
            title: 'Company'
        },
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'feedback',
            type: 'string',
            title: 'Feedback'
        },
    ]
}