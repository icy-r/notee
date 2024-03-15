import { render, screen } from '@testing-library/vue';
import LectureDetails from './lecture-details.vue';

describe('LectureDetails', () => {
  test('renders lecture details', async () => {
    const lectures = [
      {
        id: 1,
        title: 'Introduction to Vue.js',
        professor: 'John Doe',
        time: '10:00 AM',
        date: '2022-01-01',
        imageUrl: 'https://example.com/image.jpg',
        link: 'https://example.com/lecture/1',
      },
      // Add more lecture objects as needed
    ];

    // Mock axios.get to return the lectures
    jest.spyOn(axios, 'get').mockResolvedValue({ data: lectures });

    render(LectureDetails);

    // Wait for the lectures to be loaded
    await screen.findByText('Introduction to Vue.js');

    // Assert that the lecture details are rendered correctly
    expect(screen.getByText('Introduction to Vue.js')).toBeInTheDocument();
    expect(screen.getByText('Professor: John Doe')).toBeInTheDocument();
    expect(screen.getByText('Time: 10:00 AM')).toBeInTheDocument();
    expect(screen.getByText('Date: 2022-01-01')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Join' })).toHaveAttribute('href', 'https://example.com/lecture/1');
  });
});