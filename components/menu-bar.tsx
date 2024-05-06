import Link from 'next/link';


export const MenuBar = ({  }) => {
    return (
    <header className="sticky top-0 z-50 flex items-center justify-center space-x-10 w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
        <Link href={{
            pathname: '/',
        
        }}>
            Dashboard
        </Link>
        <Link href={{
            pathname: '/sales-funnel',
        }}>
            Sales Funnel
        </Link>
        <Link href={{
            pathname: '/questions',
        }}>
            ?'s
        </Link>
        <Link href={{
            pathname: '/queries',
        }}>
            Queries
        </Link>
    </header>
    )
}