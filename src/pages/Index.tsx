import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Game {
  id: number;
  title: string;
  genre: string[];
  price: string;
  image: string;
  screenshots: string[];
  rating: number;
  description: string;
  requirements: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  };
}

const games: Game[] = [
  {
    id: 1,
    title: 'Mystic Legends',
    genre: ['RPG', 'Фэнтези', 'Приключения'],
    price: 'Бесплатно',
    image: 'https://cdn.poehali.dev/projects/b3fb6e06-90bd-4389-8620-b4a285da840e/files/d14b0c25-c30e-44f1-a846-81c991cfe6ee.jpg',
    screenshots: [
      'https://cdn.poehali.dev/projects/b3fb6e06-90bd-4389-8620-b4a285da840e/files/d14b0c25-c30e-44f1-a846-81c991cfe6ee.jpg',
    ],
    rating: 4.8,
    description: 'Погрузитесь в мир магии и приключений. Станьте легендарным героем в эпической RPG с открытым миром.',
    requirements: {
      os: 'Windows 10/11',
      processor: 'Intel Core i5-8400 / AMD Ryzen 5 2600',
      memory: '8 GB RAM',
      graphics: 'NVIDIA GTX 1060 / AMD RX 580',
      storage: '50 GB свободного места'
    }
  },
  {
    id: 2,
    title: 'Cyber Night 2077',
    genre: ['Экшен', 'Киберпанк', 'Открытый мир'],
    price: 'Бесплатно',
    image: 'https://cdn.poehali.dev/projects/b3fb6e06-90bd-4389-8620-b4a285da840e/files/e133b734-9718-4299-8d8c-612f1d32f1e3.jpg',
    screenshots: [
      'https://cdn.poehali.dev/projects/b3fb6e06-90bd-4389-8620-b4a285da840e/files/e133b734-9718-4299-8d8c-612f1d32f1e3.jpg',
    ],
    rating: 4.6,
    description: 'Футуристический мегаполис ждет вас. Киберпанк-экшен с глубоким сюжетом и свободой выбора.',
    requirements: {
      os: 'Windows 10/11',
      processor: 'Intel Core i7-9700K / AMD Ryzen 5 3600',
      memory: '12 GB RAM',
      graphics: 'NVIDIA RTX 2060 / AMD RX 5700 XT',
      storage: '70 GB свободного места'
    }
  },
  {
    id: 3,
    title: 'Wasteland Survival',
    genre: ['Выживание', 'Постапокалипсис', 'Крафт'],
    price: 'Бесплатно',
    image: 'https://cdn.poehali.dev/projects/b3fb6e06-90bd-4389-8620-b4a285da840e/files/bebd34d4-1f6d-45c3-9e73-e84e27732e17.jpg',
    screenshots: [
      'https://cdn.poehali.dev/projects/b3fb6e06-90bd-4389-8620-b4a285da840e/files/bebd34d4-1f6d-45c3-9e73-e84e27732e17.jpg',
    ],
    rating: 4.7,
    description: 'Выживите в мире после катастрофы. Собирайте ресурсы, стройте убежище и сражайтесь за жизнь.',
    requirements: {
      os: 'Windows 10/11',
      processor: 'Intel Core i5-6600K / AMD Ryzen 3 1300X',
      memory: '8 GB RAM',
      graphics: 'NVIDIA GTX 970 / AMD RX 470',
      storage: '40 GB свободного места'
    }
  }
];

const genres = ['Все', 'RPG', 'Экшен', 'Выживание', 'Киберпанк', 'Фэнтези', 'Постапокалипсис'];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('Все');
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const filteredGames = games.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === 'Все' || game.genre.includes(selectedGenre);
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-heading font-bold text-primary">ИГРОВОЙ ПОРТАЛ</h1>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Icon name="User" size={20} className="mr-2" />
                Войти
              </Button>
            </div>
          </div>
          <div className="relative">
            <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Поиск игр..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-background/50"
            />
          </div>
        </div>
      </header>

      <nav className="border-b border-border bg-card/30 backdrop-blur-sm sticky top-[120px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 py-3 overflow-x-auto">
            <Button variant="ghost" size="sm" className="gap-2">
              <Icon name="Home" size={16} />
              Главная
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <Icon name="Flame" size={16} />
              Популярное
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <Icon name="Sparkles" size={16} />
              Новинки
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <Icon name="Star" size={16} />
              Топ рейтинг
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <div className="relative h-[400px] rounded-lg overflow-hidden group">
            <img
              src={games[0].image}
              alt="Featured"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex gap-2 mb-3">
                {games[0].genre.map((g) => (
                  <Badge key={g} variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                    {g}
                  </Badge>
                ))}
              </div>
              <h2 className="text-4xl font-heading font-bold mb-2">{games[0].title}</h2>
              <p className="text-muted-foreground mb-4 max-w-2xl">{games[0].description}</p>
              <Button size="lg" className="gap-2">
                <Icon name="Download" size={20} />
                Скачать бесплатно
              </Button>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-heading font-semibold mb-4">Жанры</h3>
          <div className="flex flex-wrap gap-2">
            {genres.map((genre) => (
              <Button
                key={genre}
                variant={selectedGenre === genre ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedGenre(genre)}
                className="transition-all"
              >
                {genre}
              </Button>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-xl font-heading font-semibold mb-4">Каталог игр</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGames.map((game) => (
              <Card
                key={game.id}
                className="overflow-hidden group cursor-pointer transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 animate-fade-in"
                onClick={() => setSelectedGame(game)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-2 right-2 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1">
                    <Icon name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-semibold">{game.rating}</span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-heading font-semibold mb-2">{game.title}</h4>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {game.genre.slice(0, 2).map((g) => (
                      <Badge key={g} variant="outline" className="text-xs">
                        {g}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-semibold text-lg">{game.price}</span>
                    <Button size="sm" className="gap-1">
                      <Icon name="Download" size={16} />
                      Скачать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {selectedGame && (
        <div
          className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 overflow-y-auto animate-fade-in"
          onClick={() => setSelectedGame(null)}
        >
          <div className="container mx-auto px-4 py-8" onClick={(e) => e.stopPropagation()}>
            <Button
              variant="ghost"
              size="icon"
              className="mb-4"
              onClick={() => setSelectedGame(null)}
            >
              <Icon name="X" size={24} />
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <img
                    src={selectedGame.image}
                    alt={selectedGame.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h2 className="text-3xl font-heading font-bold mb-4">{selectedGame.title}</h2>
                  <div className="flex gap-2 mb-4">
                    {selectedGame.genre.map((g) => (
                      <Badge key={g} variant="secondary">
                        {g}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{selectedGame.description}</p>
                </div>

                <Tabs defaultValue="screenshots" className="w-full">
                  <TabsList>
                    <TabsTrigger value="screenshots">
                      <Icon name="Image" size={16} className="mr-2" />
                      Скриншоты
                    </TabsTrigger>
                    <TabsTrigger value="video">
                      <Icon name="Play" size={16} className="mr-2" />
                      Видео
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="screenshots" className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      {selectedGame.screenshots.map((screenshot, index) => (
                        <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                          <img
                            src={screenshot}
                            alt={`Screenshot ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform"
                          />
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="video">
                    <div className="bg-muted rounded-lg p-8 text-center">
                      <Icon name="Play" size={48} className="mx-auto mb-4 text-muted-foreground" />
                      <p className="text-muted-foreground">Видео-трейлер скоро появится</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-heading font-bold text-primary">{selectedGame.price}</span>
                      <div className="flex items-center gap-1">
                        <Icon name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                        <span className="font-semibold">{selectedGame.rating}</span>
                      </div>
                    </div>
                    <Button size="lg" className="w-full gap-2 mb-3">
                      <Icon name="Download" size={20} />
                      Скачать игру
                    </Button>
                    <Button variant="outline" size="lg" className="w-full gap-2">
                      <Icon name="Heart" size={20} />
                      В избранное
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold mb-4 flex items-center gap-2">
                      <Icon name="Cpu" size={20} className="text-primary" />
                      Системные требования
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="text-muted-foreground">ОС:</span>
                        <p className="font-medium">{selectedGame.requirements.os}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Процессор:</span>
                        <p className="font-medium">{selectedGame.requirements.processor}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Память:</span>
                        <p className="font-medium">{selectedGame.requirements.memory}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Видеокарта:</span>
                        <p className="font-medium">{selectedGame.requirements.graphics}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Место на диске:</span>
                        <p className="font-medium">{selectedGame.requirements.storage}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
