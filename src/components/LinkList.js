import { gql, useQuery } from '@apollo/client';
import React from 'react';
import Link from './Link';

export const FEED_QUERY = gql`
  {
    feed {
      id
      links {
        id
        createdAt
        url
        description
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`;

const LinkList = () => {
    const linksToRender = [
        {
            id: 'link-id-1',
            description:
            'Prisma gives you a powerful database toolkit 😎',
            url: 'https://prisma.io'
        },
        {
            id: 'link-id-2',
            description: 'The best GraphQL client',
            url: 'https://www.apollographql.com/docs/react/'
        }
    ];
    const { data } = useQuery(FEED_QUERY);
    return (
        <div>
            {data && (
                <>
                {data.feed.links.map((link, index) => (
                    <Link key={link.id} link={link} index={index} />
                ))}
                </>
            )}
        </div>
    );
};

export default LinkList;