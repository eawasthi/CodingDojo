﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace Random_Passcode
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
public void ConfigureServices(IServiceCollection services)
{
    services.AddSession();
    services.AddMvc();
}

// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
public void Configure(IApplicationBuilder app, ILoggerFactory loggerFactory)
{
    app.UseSession();
    app.UseMvc();
}

    }
}