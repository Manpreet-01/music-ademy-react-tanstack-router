import { createLazyFileRoute } from '@tanstack/react-router';
import Instructors from '../components/Instructors';

export const Route = createLazyFileRoute('/instructors')({
  component: Instructors
});