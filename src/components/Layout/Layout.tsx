import {
  AppShell,
  Burger,
  Container,
  Group,
  Skeleton,
  Title,
  useMantineColorScheme,
} from '@mantine/core'
import { ButtonToggleColorScheme } from '../ButtonToggleColorScheme'
import { useDisclosure } from '@mantine/hooks'

const Layout = () => {
  const [opened, { toggle }] = useDisclosure()
  const { colorScheme } = useMantineColorScheme()
  return (
    <AppShell
      withBorder={false}
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      aside={{
        width: 300,
        breakpoint: 'md',
        collapsed: { desktop: false, mobile: true },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Container
          h="100%"
          bg={
            colorScheme === 'dark'
              ? 'var(--mantine-color-red-9)'
              : 'var(--mantine-color-red-6)'
          }
        >
          <Group h="100%" px="md" justify="space-between">
            <Burger
              color={
                colorScheme === 'dark'
                  ? 'var(--mantine-color-gray-9-filled)'
                  : 'var(--mantine-color-gray-9)'
              }
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <Title order={1} size="h4">
              Pokedex
            </Title>
            <ButtonToggleColorScheme />
          </Group>
        </Container>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        Navbar
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))}
      </AppShell.Navbar>
      <AppShell.Main>
        Aside is hidden on on md breakpoint and cannot be opened when it is
        collapsed
      </AppShell.Main>
      <AppShell.Aside p="md">Aside</AppShell.Aside>
      <AppShell.Footer p="md">Footer</AppShell.Footer>
    </AppShell>
  )
}

export default Layout
