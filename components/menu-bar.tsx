import Link from 'next/link';


export const MenuBar = ({  }) => {
    return (
    <header className="sticky top-0 z-50 flex items-center justify-center space-x-10 w-full h-16 px-4 border-b shrink-0 bg-background backdrop-blur-xl">
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
            Revenue Opportunities
        </Link>
        <Link href={{
            pathname: '/queries',
        }}>
            Queries
        </Link>
    </header>
    )
}