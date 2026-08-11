export default async function handler(req, res) {
  // Set caching headers for Vercel Edge/CDN
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate')
  res.setHeader('Content-Type', 'application/json')

  try {
    const graphqlQuery = {
      query: `
        query userProblemsSolved($username: String!) {
          matchedUser(username: $username) {
            submitStats {
              acSubmissionNum {
                difficulty
                count
              }
            }
          }
        }
      `,
      variables: { username: 'el6keC5TtO' },
    }

    const response = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': 'https://leetcode.com',
      },
      body: JSON.stringify(graphqlQuery),
    })

    if (!response.ok) {
      return res.status(200).json({ solved: null, error: true })
    }

    const data = await response.json()
    const submissions = data?.data?.matchedUser?.submitStats?.acSubmissionNum
    if (!submissions || !Array.isArray(submissions)) {
      return res.status(200).json({ solved: null, error: true })
    }

    const allSolvedEntry = submissions.find((item) => item.difficulty === 'All')
    const count = allSolvedEntry ? allSolvedEntry.count : null

    return res.status(200).json({ solved: count })
  } catch (err) {
    return res.status(200).json({ solved: null, error: true })
  }
}
