<?php

declare(strict_types=1);

namespace Stancl\Tenancy\Middleware;
namespace App\Http\Middleware;

use Closure;
use Stancl\Tenancy\Resolvers\DomainTenantResolver;
use Stancl\Tenancy\Tenancy;
use Stancl\Tenancy\Middleware\IdentificationMiddleware;

class InitializeTenancyByDomain extends IdentificationMiddleware
{
    /** @var callable|null */
    public static $onFail;

    /** @var Tenancy */
    protected $tenancy;

    /** @var DomainTenantResolver */
    protected $resolver;

    public function __construct(Tenancy $tenancy, DomainTenantResolver $resolver)
    {
        $this->tenancy = $tenancy;
        $this->resolver = $resolver;
    }
    /**​
     * Handle an incoming request.​
     *​
     * @param  \Illuminate\Http\Request  $request​
     * @param  \Closure  $next​
     * @return mixed​
     */

    public function handle($request, Closure $next)
    {

        //Skip for central domain
        if(in_array($request->getHost(), config('tenancy.central_domains'), true)){
            return $next($request);
        }

        return $this->initializeTenancy(
            $request, $next, $request->getHost()
        );
    }
}

